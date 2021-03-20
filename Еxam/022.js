class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {

        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;

        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }

    like(username) {

        if (this._likes.indexOf(username) > -1) {
            throw new Error("You can't like the same story twice!");
        }

        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;

    }

    dislike(username) {

        if (this._likes.indexOf(username) < 0) {
            throw new Error("You can't dislike this story!");
        }

        this._likes = this._likes.filter(name => name !== username);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {

        let index = -1;

        for (let i = 0; i < this._comments.length; i++) {
            if (this._comments[i].idOfComment == id) {
                index = i;
                break;

            }

        }

        if (id == undefined || index == -1) {

            this._comments.push({
                usernameOfComment: username,
                contentOfComment: content,
                idOfComment: this._comments.length + 1,
                replies: []
            });

            return `${username} commented on ${this.title}`
        } else {
            this._comments[index].replies.push({
                usernameOfReply: username,
                contentOfReply: content,
                idOfReply: this._comments[index].replies.length + 1
            })
            return "You replied successfully";
        }
    }

    toString(sortingType) {

        let result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            `Comments:`,
        ]

        if (sortingType === 'asc') {
            this._comments.sort((a, b) => a.idOfComment - b.idOfComment);
            for (let i = 0; i < this._comments.length; i++) {
                if (this._comments[i].replies.length > 0) {
                    this._comments[i].replies
                        .sort((a, b) => a.idOfRepl - b.idOfRepl);
                }
            }
        }

        if (sortingType === 'desc') {

            this._comments.sort((a, b) => b.idOfComment - a.idOfComment);
            for (let i = 0; i < this._comments.length; i++) {

                if (this._comments[i].replies.length > 0) {
                    this._comments[i].replies.sort((a, b) => b.idOfReply - a.idOfReply);
                }

            }

        }

        if (sortingType === 'username') {

            this._comments.sort((a, b) => a.usernameOfComment
                .localeCompare(b.usernameOfComment));

            for (let i = 0; i < this._comments.length; i++) {

                if (this._comments[i].replies.length > 0) {

                    this._comments[i].replies
                        .sort((a, b) => a.usernameOfReply
                            .localeCompare(b.usernameOfComment));
                }

            }

        }

        for (let i = 0; i < this._comments.length; i++) {
            result.push(`-- ${this._comments[i].idOfComment}. ${this._comments[i].usernameOfComment}: ${this._comments[i].contentOfComment}`);
            for (let j = 0; j < this._comments[i].replies.length; j++) {

                if (this._comments[i].replies.length > 0) {
                    result.push(`--- ${this._comments[i].idOfComment}.${this._comments[i].replies[j].idOfReply}. ${this._comments[i].replies[j].usernameOfReply}: ${this._comments[i].replies[j].contentOfReply}`);
                }
            }
        }

        return result.join('\n');
    }
}