const generator = require('../utils/utils').idGenerator;
class BlogPost {
    constructor(title, content){
        const { value } = generator.next();//{value, done}
        this._id = value;
        this._title = title;
        this._content = content;
    }
    setTitle(title){
        this._title = title;
    }
    setContent(content){
        this._content = content;
    }
    get title(){
        return this._title;
    }
}
module.exports = BlogPost;