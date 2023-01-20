const mysql = require("mysql2");
const express = require("express");

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "shop",
    password: "1234"
});

let cosm = "select к.id as id, к.Название as Название, б.Название as Бренд, п.Название as Предназначение, т.Название as Тип, Описание, Стоимость, Изображение "
+ "from косметика к "
+ "inner join бренд б on к.Бренд_id = б.id "
+ "inner join предназначение п on к.Предназначение_id = п.id "
+ "inner join тип т on к.Тип_id = т.id "
+ "inner join изображение и on к.id = и.Косметика_id ";
let count_cosm = "select COUNT(*) as count "
+ "from косметика к "
+ "inner join бренд б on к.Бренд_id = б.id "
+ "inner join предназначение п on к.Предназначение_id = п.id "
+ "inner join тип т on к.Тип_id = т.id "
+ "inner join изображение и on к.id = и.Косметика_id"

app.set("view engine", "hbs");

// получение списка товаров
app.get("/", function (req, res) {
    let pages = 0;
    const limit = 8;
    pool.query(count_cosm, function (err, rows) {
            if (err) return console.log(err);
            var numRows = rows[0].count;
            var numPages = Math.ceil(numRows / limit);
            for(let page=1; page<=numPages; page++)
            pages+8;
            pool.query(cosm + "limit 8 offset " + pages, function(err, data) {
                if(err) console.log(err);     
            res.render("index.hbs", {
                users: data,
                pageCount: numPages
            });
        });
    });
});
// Критерии поиска товаров
app.get("/cat1", function (req, res) {
    let pages = 0;
    const limit = 8;
    pool.query(count_cosm + " where к.Предназначение_id = 1", function (err, rows) {
            if (err) return console.log(err);
            var numRows = rows[0].count;
            var numPages = Math.ceil(numRows / limit);
            for(let page=1; page<=numPages; page++)
            pages+8;
            pool.query(cosm + "where к.Предназначение_id = 1 " + "limit 8 offset " + pages, function(err, data) {
                if(err) console.log(err);     
            res.render("index.hbs", {
                users: data,
                pageCount: numPages
            });
        });
    });
});
app.get("/cat1_1", function (req, res) {
    let pages = 0;
    const limit = 8;
    pool.query(count_cosm + " where к.Предназначение_id = 1 " + "&& к.Тип_id = 3 || к.Тип_id = 4 || к.Тип_id = 5", function (err, rows) {
            if (err) return console.log(err);
            var numRows = rows[0].count;
            var numPages = Math.ceil(numRows / limit);
            for(let page=1; page<=numPages; page++)
            pages+8;
            pool.query(cosm + "where к.Предназначение_id = 1 " + "&& к.Тип_id = 3 || к.Тип_id = 4 || к.Тип_id = 5 " + "limit 8 offset " + pages, function(err, data) {
                if(err) console.log(err);     
            res.render("index.hbs", {
                users: data,
                pageCount: numPages
            });
        });
    });
});
app.get("/cat1_2", function (req, res) {
    let pages = 0;
    const limit = 8;
    pool.query(count_cosm + " where к.Предназначение_id = 1 " + "&& к.Тип_id = 1 || к.Тип_id = 10 || к.Тип_id = 2", function (err, rows) {
            if (err) return console.log(err);
            var numRows = rows[0].count;
            var numPages = Math.ceil(numRows / limit);
            for(let page=1; page<=numPages; page++)
            pages+8;
            pool.query(cosm + "where к.Предназначение_id = 1 " + "&& к.Тип_id = 1 || к.Тип_id = 10 || к.Тип_id = 2 " + "limit 8 offset " + pages, function(err, data) {
                if(err) console.log(err);     
            res.render("index.hbs", {
                users: data,
                pageCount: numPages
            });
        });
    });
});
app.get("/cat1_3", function (req, res) {
    let pages = 0;
    const limit = 8;
    pool.query(count_cosm + " where к.Предназначение_id = 1 " + "&& к.Тип_id = 6 || к.Тип_id = 7 || к.Тип_id = 8 || к.Тип_id = 12 || к.Тип_id = 14", function (err, rows) {
            if (err) return console.log(err);
            var numRows = rows[0].count;
            var numPages = Math.ceil(numRows / limit);
            for(let page=1; page<=numPages; page++)
            pages+8;
            pool.query(cosm + "where к.Предназначение_id = 1 " + "&& к.Тип_id = 6 || к.Тип_id = 7 || к.Тип_id = 8 || к.Тип_id = 12 || к.Тип_id = 14 " + "limit 8 offset " + pages, function(err, data) {
                if(err) console.log(err);     
            res.render("index.hbs", {
                users: data,
                pageCount: numPages
            });
        });
    });
});
app.get("/cat1_4", function (req, res) {
    let pages = 0;
    const limit = 8;
    pool.query(count_cosm + " where к.Предназначение_id = 1 " + "&& к.Тип_id = 11 || к.Тип_id = 13", function (err, rows) {
            if (err) return console.log(err);
            var numRows = rows[0].count;
            var numPages = Math.ceil(numRows / limit);
            for(let page=1; page<=numPages; page++)
            pages+8;
            pool.query(cosm + "where к.Предназначение_id = 1 " + "&& к.Тип_id = 11 || к.Тип_id = 13 " + "limit 8 offset " + pages, function(err, data) {
                if(err) console.log(err);     
            res.render("index.hbs", {
                users: data,
                pageCount: numPages
            });
        });
    });
});
app.get("/cat2", function (req, res) {
    let pages = 0;
    const limit = 8;
    pool.query(count_cosm + " where к.Предназначение_id = 2", function (err, rows) {
            if (err) return console.log(err);
            var numRows = rows[0].count;
            var numPages = Math.ceil(numRows / limit);
            for(let page=1; page<=numPages; page++)
            pages+8;
            pool.query(cosm + "where к.Предназначение_id = 2 " + "limit 8 offset " + pages, function(err, data) {
                if(err) console.log(err);     
            res.render("index.hbs", {
                users: data,
                pageCount: numPages
            });
        });
    });
});
app.get("/cat3", function (req, res) {
    /* let pages = 0;
    const limit = 8;
    pool.query(count_cosm + " where к.Предназначение_id = 3", function (err, rows) {
            if (err) return console.log(err);
            var numRows = rows[0].count;
            var numPages = Math.ceil(numRows / limit);
            for(let page=1; page<=numPages; page++)
            pages+8; */
            pool.query(cosm + "where к.Предназначение_id = 3 "/*  + "limit 8 offset " + pages */, function(err, data) {
                if(err) console.log(err);     
            res.render("index.hbs", {
                users: data,
               /*  pageCount: numPages */
            });
        });
    /* }); */
});
app.get("/cat4", function (req, res) {
/*     let pages = 0;
    const limit = 8;
    pool.query(count_cosm + " where к.Предназначение_id = 4", function (err, rows) {
            if (err) return console.log(err);
            var numRows = rows[0].count;
            var numPages = Math.ceil(numRows / limit);
            for(let page=1; page<=numPages; page++)
            pages+8; */
            pool.query(cosm + "where к.Предназначение_id = 4 "/*  + "limit 8 offset " + pages */, function(err, data) {
                if(err) console.log(err);     
            res.render("index.hbs", {
                users: data,
                /* pageCount: numPages */
            });
        });
    /* }); */
});
app.get("/cat5", function (req, res) {
    let pages = 0;
    const limit = 8;
    pool.query(count_cosm + " where к.Предназначение_id = 5", function (err, rows) {
            if (err) return console.log(err);
            var numRows = rows[0].count;
            var numPages = Math.ceil(numRows / limit);
            for(let page=1; page<=numPages; page++)
            pages+8;
            pool.query(cosm + "where к.Предназначение_id = 5 " + "limit 8 offset " + pages, function(err, data) {
                if(err) console.log(err);     
            res.render("index.hbs", {
                users: data,
                pageCount: numPages
            });
        });
    });
});
//осуществление пагинации
app.get("/page/:pageCount/:numPages", function (req, res) {
    let pages = 0;
    const pageCount = req.params.pageCount;
    const numPages = req.params.numPages;
    pages = pages+8*(pageCount-1);
        pool.query(cosm + "limit 8 offset " + pages, function(err, data) {
            if(err) console.log(err);     
        res.render("index.hbs", {
            users: data,
            pageCount: numPages
        });
    });
});
// возвращаем форму товара
app.get("/product_form/:id", function (req, res) {
    const id = req.params.id;
    pool.query(cosm + "where к.id = ?", [id], function (err, data) {
        if (err) return console.log(err);
        res.render("product_form.hbs", {
            product: data[0]
        });
    });
});
// возвращаем форму корзины
app.get("/cart", function (req, res) {
    res.render("cart.hbs");
});
//добавление в корзину
app.get("/add/:id", function (req, res) {
    const id = req.params.id;
    pool.query(cosm + "where к.id = ?", [id], function (err, data) {
        if (err) return console.log(err);
        res.render("cart.hbs", {
            add_product: data[0]
        });
    });
});
//оформление заказа
app.post("/add/cart/:id", urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const Косметика_id = req.params.id;
    const Дата = new Date();
    pool.query("INSERT INTO заказ (Косметика_id, Дата) VALUES (?,?)", [Косметика_id, Дата], function (err, data) {
        if (err) return console.log(err);
        res.redirect("/");
    });
});
// возвращаем форму регистрации
app.get("/registr", function (req, res) {
    res.render("registr.hbs")
});
//регистрация пользователя, отправка данных в бд
app.post("/registr", urlencodedParser, function (req, res) {

    if (!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const Имя = req.body.Имя;
    const Телефон = req.body.Телефон;
    const Адрес = req.body.Адрес;
    const Логин = req.body.Логин;
    const Пароль = req.body.Пароль;
    pool.query("INSERT INTO авторизация (Имя, Телефон, Адрес, Логин, Пароль) VALUES (?,?,?,?,?)", [Имя, Телефон, Адрес, Логин, Пароль], function (err, data) {
        if (err) return console.log(err);
        res.redirect("/login");
    });
});
// возвращаем форму авторизации
app.get("/login", function (req, res) {
    res.render("login.hbs");
});
app.post("/login", function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const Логин = req.body.Логин;
    const Пароль = req.body.Пароль;
    console.log(Логин_);
    console.log(Пароль_);
    pool.query("select Логин, Пароль from авторизация where Логин = ? && Пароль = ?", [Логин_, Пароль_], function (err, data) {
        if (err) return console.log(err); 
        console.log(data); 
    if (Логин_ == Логин && Пароль_ == Пароль) res.render("/login", {
        client: data[0]
    });
    else alert("Аккаунта не существует");
    });
}); 
// возвращаем форму с магазинами
app.get("/shops", function (req, res) {
    pool.query("SELECT * FROM магазин", function (err, data) {
        if (err) return console.log(err);
        res.render("shops.hbs", {
            shops: data
        });
    });
});
// получение списка товаров
app.get("/admin", function (req, res) {
    pool.query(cosm + "order by id", function (err, data) {
            if (err) return console.log(err);
            res.render("admin.hbs", {
                users: data
            });
        });
});
// возвращаем форму для добавления данных товара
app.get("/create", function (req, res) {
    res.render("create.hbs");
});
// получаем отправленные данные и добавляем их в БД
app.post("/create", urlencodedParser, function (req, res) {

    if (!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const Косметика_id =  req.body.Косметика_id;
    const Название = req.body.Название;
    const Бренд_id = req.body.Бренд_id;
    const Предназначение_id = req.body.Предназначение_id;
    const Тип_id = req.body.Тип_id;
    const Описание = req.body.Описание;
    const Стоимость = req.body.Стоимость;
    const Изображение = req.body.Изображение;
    console.log(id);
    console.log(Косметика_id)
    pool.query("INSERT INTO косметика (Название, Бренд_id, Предназначение_id, Тип_id, Описание, Стоимость) VALUES (?,?,?,?,?,?)", [Название, Бренд_id, Предназначение_id, Тип_id, Описание, Стоимость], function (err, data) {
        if (err) return console.log(err); 
        pool.query("INSERT INTO изображение (Косметика_id, Изображение) VALUES (?,?)", [data.insertId, Изображение], function (err, data) {
        res.redirect("/admin");
    });
});
});
// получем id редактируемого товара, получаем его из бд и отправлям с формой редактирования
app.get("/edit/:id", function (req, res) {
    const id = req.params.id;
    pool.query("SELECT * FROM косметика WHERE id=?", [id], function (err, data) {
        if (err) return console.log(err);
        res.render("edit.hbs", {
            cosmetic: data[0]
        });
    });
});
// получаем отредактированные данные и отправляем их в БД
app.post("/edit", urlencodedParser, function (req, res) {

    if (!req.body) return res.sendStatus(400);
    // console.log(req.body);
    const id = req.body.id;
    const Название = req.body.Название;
    const Бренд_id = req.body.Бренд_id;
    const Предназначение_id = req.body.Предназначение_id;
    const Тип_id = req.body.Тип_id;
    const Описание = req.body.Описание;
    const Стоимость = req.body.Стоимость;

    pool.query("UPDATE косметика SET Название=?, Бренд_id=?, Предназначение_id=?, Тип_id=?, Описание=?, Стоимость=? WHERE id=?", [Название, Бренд_id, Предназначение_id, Тип_id, Описание, Стоимость, id], function (err, data) {
        if (err) return console.log(err);
        res.redirect("/admin");
    });
});

// получаем id удаляемого товара и удаляем его из бд
app.post("/delete/:id", function (req, res) {

    const id = req.params.id;
    pool.query("DELETE FROM косметика WHERE id=?", [id], function (err, data) {
        if (err) return console.log(err);
        res.redirect("/admin");
    });
});

app.listen(3000, function () {
    console.log("Сервер ожидает подключения...");
});