export const typeHow = {
    1: 'hobby',
    2: 'profession',
    3: 'relation',
    // 4: 'friend',
    5: 'event',
}


export default class filterProducts {

    static indicators;

    static filter = (products, indicators) => {
        this.indicators = indicators;
        const filteredProducts = products.filter((product) => {
            const lastFilter = typeHow[this.indicators.how] === undefined ? true : this[`is${typeHow[this.indicators.how].charAt(0).toUpperCase()}${typeHow[this.indicators.how].slice(1)}`](product);
            console.log('id-- ',product.id,lastFilter);
            return this.isHow(product) && this.isSex(product) && this.isAge(product) && lastFilter
        })
        console.log('filteredProducts-- ', filteredProducts);
        return filteredProducts;
    }

    static isHow = (product) => {
        console.log('product.how-- ', product.how);
        if (product.how === undefined) return true;
        const how = product.how.split(',').filter((i) => this.indicators.how.includes(i.trim()))
        return how.length > 0;
    }

    static isSex = (product) => {
        console.log('product.sex-- ', product.sex);
        if (product.sex === undefined) return true;
        const sex = product.sex.split(',').filter((i) => this.indicators.sex.includes(i))
        return sex.length > 0;
    }

    static isAge = (product) => {
        console.log('product.age-- ', product.age);
        if (product.age === undefined) return true;
        const age = product.age.split(',').filter((i) => this.indicators.age.includes(i))
        return age.length > 0;
    }

    static isEvent = (product) => {
        console.log('product.event-- ', product.event);
        if (product.event === undefined) return true;
        const event = product.event.split(',').filter((i) => this.indicators.event.includes(i))
        return event.length > 0;
    }

    static isHobby = (product) => {
        console.log('product.hobby-- ', product.hobby);
        if (product.hobby === undefined) return true;
        const hobby = product.hobby.split(',').filter((i) => this.indicators.hobby.includes(i))
        return hobby.length > 0;
    }

    static isProfession = (product) => {
        console.log('product.profession-- ', product.profession);
        if (product.profession === undefined) return true;
        const profession = product.profession.split(',').filter((i) => this.indicators.profession.includes(i))
        return profession.length > 0;
    }

    static isRelation = (product) => {
        console.log('product.relation-- ', product.relation);
        if (product.relation === undefined) return true;
        const relation = product.relation.split(',').filter((i) => this.indicators.relation.includes(i))
        console.log('product.relation.split-- ', product.relation.split(','));
        return relation.length > 0;
    }
}
// id,name,img,sex,how,relation,profession,hobby,event,age,link,description

// [0: {name: "Скетчбук в авторской обложке", img: "457241933, 457241935, 457241932, 457241934 ", how: "1,3,4", relation: "3, 4, 6, 10, 11, 13", hobby: "7", …}]

// how: ""
// sex: null
// age: null
// event: null
// hobby: null
// profession: null
// relation: null
