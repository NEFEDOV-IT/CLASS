const options = {
    nameStorage: 'local',
    value: null,
}

class Storage {
    constructor(key, options) {
        this.key = key
        this.value = options.value
        this.storage = (options.nameStorage === 'local') ? localStorage : sessionStorage
    }

    get() {
        return this.storage.getItem(this.key)
    }

    set(value) {
        this.value = value
        this.storage.setItem(this.key, value);
    }

    clear() {
        this.storage.removeItem(this.key)
        this.value = options.value
    }

    isEmpty() {
        return (this.get() === null || this.get() === undefined)
    }
}

const admin = new Storage('admin', options)
admin.set('Ilya')
// admin.clear()
console.log(admin.get())
console.log(admin)
console.log(admin.isEmpty())



// class Storage {
//
//     constructor(key, value = null, type = 'local') {
//         this.key = key;
//         this.value = value;
//         this.storage = (type === 'session') ? sessionStorage : localStorage;
//         this.set(value);
//     }
//
//     get() {
//         return this.storage.getItem(this.key);
//     }
//     set(value) {
//         this.storage.setItem(this.key, (value === undefined) ? this.value : value);
//     }
//     clear() {
//         this.storage.removeItem(this.key);
//     }
//     isEmpty() {
//         const value = this.get.call(this);
//         return (value === 'null' || value === 'undefined' || value === null);
//     }
// }
//
// let names = new Storage('names');
// console.log(names);
// names.set(123);
// console.log(names);
// console.log(names.isEmpty());
// let result = names.get();
// console.log(result);
// // names.clear();
// console.log(names);
// console.log(names.isEmpty());

// let foo = new Storage('foo', 'session');
// console.log(foo);
// foo.set('next');
// console.log(foo.isEmpty());
// let res = foo.get();
// console.log(res);
// foo.clear();
// console.log(foo.isEmpty());
