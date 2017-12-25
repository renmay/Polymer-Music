export class List {
    /**
     * @constructor
     * @param {*} id 歌单id
     * @param {*} type 歌单来源
     * @param {*} name 歌单名
     * @param {*} image 歌单图片
     */
    constructor({ id, type, name, image }) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.image = image;
    }
    format() {
        return {
            id: this.id,
            type: this.type,
            name: this.name,
            image: this.image
        };
    }
}

export function createList(listData, type = 'qq') {
    return new List({
        id: listData.dissid,
        type,
        name: listData.dissname,
        image: listData.imgurl
    });
}
