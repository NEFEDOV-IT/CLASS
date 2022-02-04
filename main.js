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
