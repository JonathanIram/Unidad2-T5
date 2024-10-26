class Pila{
    constructor() {
        this.almacenPila = []
    }

    push(elemento){
        this.almacenPila.push(elemento)
        return this.almacenPila
    }
    pop(){
        if(this.almacenPila.length === 0){
            return null
        }
        return this.almacenPila.pop()
    }
    peek(){
        if(this.almacenPila.length === 0){
            return null
        }
        return this.almacenPila[this.almacenPila.length - 1]
    }
    size(){
        return this.almacenPila.length
    }
    print(){
        return this.almacenPila
    }

}
class Cola{
    constructor() {
        this.almacenCola = []

    }

    enqueue(elemento){
        this.almacenCola.push(elemento)
        return this.almacenCola
    }
    dequeue(){
        if(this.almacenCola.length == 0){
            return null
        }
        return this.almacenCola.shift()
    }
    peek(){
        if(this.almacenCola.length === 0){
            return null
        }
        return this.almacenCola[this.almacenCola.length - this.almacenCola.length]
    }
    size(){
        return this.almacenCola.length
    }
    print(){
        return this.almacenCola
    }
    isEmpty(){
        if(this.almacenCola.length === 0){
            return true
        }
        return false  
    }
    

}

const pil = new Pila()
const col = new Cola()