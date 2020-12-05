import connections from './connection';
import {Connection} from 'mysql';
import {TableGeneric} from './tableGeneric';

class Table extends TableGeneric{
    connect ?:Connection;
    init(connect:Connection){
        console.log("call table");
        this.connect = connect;
        this.createSelerMan();
        this.createMotocycle();
    }
    createSelerMan(){
        const sql = `create table if not exists selerMan (
            id int unsigned auto_increment primary key,
            name text not null,
            description text not null
        )`;

        this.createTabel(sql,'selerMan')
    }
    createMotocycle(){
        const sql = `create table if not exists motorcycle (
            id int unsigned auto_increment primary key,
            name text not null,
            description text not null,
            idSeler int unsigned not null,
            foreign key(idSeler) references selerMan(id)
        );`
        this.createTabel(sql,'motorcycle');
    }
}

export default new Table;