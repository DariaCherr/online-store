const tours = [{
        title: "Турция",
        description: "10 дней в Турции на море, что может быть лучше? Вас ожидает отличный сервис и древняя восточная культура. Мы подобрали для вас выгодные туры и путевки на 10 дней с комфортными отелями, удобным перелетом и качественным сервисом от нашей компании.",
        tags: ["Без визы", "Горящие туры"],
        price: 25000,
        img: "./img/Турция.jpg",
    },
    {
        title: "Сочи",
        description: "Сочи – крупнейший курортный центр с развитой инфраструктурой и отличными условиями для отдыха. Город современный, молодой и многогранный. ",
        tags: ["Без визы", "Отдых в России"],
        price: 15000,
        img: "./img/Сочи.jpg",
    },
    {
        title: "Таиланд",
        description: "Таиланд – страна с великолепными пляжами и морем, экзотической самобытной культурой и широким выбором экскурсионного отдыха.",
        tags: ["Без визы"],
        price: 51000,
        img: "./img/Таиланд.jpg",
    },
    {
        title: "ОАЭ",
        description: "Объединенные Арабские Эмираты – это арабские традиции + чудеса высоких технологий. Здесь множество роскошных отелей и хороших бюджетных гостиниц – и там, и там сервис на высоте. ",
        tags: ["Без визы", "Горящие туры"],
        price: 45000,
        img: "img/ОАЭ.png",
    },
    {
        title: "Абхазия",
        description: "Абхазия – страна древней, самобытной культуры. Выбирая курорты Абхазии, вы будете любоваться красотой  местной природы и отдыхать не только телом, но и душой.",
        tags: ["Без визы"],
        price: 18000,
        img: "./img/Абхазия.jpg",
    },
    {
        title: "Египет",
        description: "Египет – земля мистики и древней истории, колыбель цивилизации фараонов, оставившей потомкам множество загадок. Историческое прошлое привлекает не только археологов со всего мира, но и огромное количество путешественников.",
        tags: ["Без визы", "Горящие туры"],
        price: 32000,
        img: "./img/Египет.jpg",
    },
    {
        title: "Индия",
        description: "Одно из самых удивительных государств Южной Азии. Колыбель древней цивилизации, занимающая самую большую территорию. Родина буддизма, чая и первой женщины-президента Индиры Ганди.",
        tags: ["Нужна виза"],
        price: 35000,
        img: "./img/Индия.jpg",
    },
    {
        title: "Доминиканская Республика",
        description: "Доминиканская Республика сегодня по праву считается лучшей страной Карибского бассейна – не только по количеству достопримечательностей и архитектурных памятников, но и по уровню обслуживания туристов. ",
        tags: ["Без визы"],
        price: 379000,
        img: "./img/Доминикана.jpg",
    },
    {
        title: "Мальдивы",
        description: "Отдых на Мальдивах —это неповторимое сочетание чистейшего океана и белоснежных песчаных пляжей, коралловых рифов и морского бриза, лета круглый год и отдыха в лучших отелях с высоким уровнем сервиса.",
        tags: ["Без визы"],
        price: 113000,
        img: "./img/Мальдивы.jpg",
    },
    {
        title: "Шри-Ланка",
        description: "Шри-Ланка — это белоснежные широкие пляжи, лазурные воды Индийского океана и самые живописные закаты! Вы погрузиться в другой мир, где сочетаются: древняя культура и удивительная природа.",
        tags: ["Нужна виза"],
        price: 95000,
        img: "./img/Шри-Ланка.jpg",
    },
    {
        title: "Бали",
        description: "Индонезия, будучи необычайно яркой и притягательной страной, объединяет десятки непохожих друг на друга городов и курортов. Но главной точкой притяжения остается остров Бали. Мощный океан, джунгли, вулканы, сочные краски, серфинг, таинственные обряды, магическое притяжение Азии в действии – все это о нем.",
        tags: ["Без визы"],
        price: 206000,
        img: "./img/Бали.jpg",
    },
    {
        title: "Сейшелские острова",
        description: "Райские острова, словно затерянные в Индийском океане – южнее экватора и севернее Мадагаскара. Яркий подводный мир, экзотическая природа, знаменитые пальмы коко-де-мер, роскошные отели, некоторые из которых занимают целый остров, безупречный сервис – это настоящий рай для влюбленных друг в друга и океан.",
        tags: ["Без визы"],
        price: 136000,
        img: "./img/Сейшелы.jpg",
    },
    {
        title: "Казань",
        description: "Казань всегда будет для вас красивым городом со множеством интереснейших исторических и современных достопримечательностей.",
        tags: ["Без визы", "Отдых в России"],
        price: 15000,
        img: "./img/Казань.jpg",
    },
    {
        title: "Санкт-Петербург",
        description: "Санкт-Петербург не похож ни на один из российских городов. Путешествие в Санкт-Петербург можно сравнить с перемещением во времени, когда одновременно находишься в прошлом, настоящем и будущем. ",
        tags: ["Без визы", "Отдых в России"],
        price: 16000,
        img: "./img/Санкт-Петербург.png",
    },
    {
        title: "Армения",
        description: "Армения – страна древней истории, потрясающих пейзажей, вкусной еды и радушных гостеприимных людей.",
        tags: ["Без визы"],
        price: 45000,
        img: "./img/Армения.jpg",
    },
    {
        title: "Дагестан",
        description: "Дагестан привлекает богатой историей, с этим местом можно знакомиться снова и снова. Который раз вы не прибыли бы в Дагестан, город раскроется вам с необычной стороны и найдет, чем порадовать.",
        tags: ["Без визы", "Отдых в России"],
        price: 16000,
        img: "./img/Дагестан.jpg",
    },
    {
        title: "Марокко",
        description: "Марокко – это загадочная страна на пересечении Европы и Африки, впитавшая в себя лучшие черты разных культур. Здесь вас ждет чарующий восточный колорит, великолепные дворцы, пестрые городские улицы, шумные базары и бескрайние песчаные пляжи.",
        tags: ["Без визы"],
        price: 172000,
        img: "./img/Марокко.jpg",
    },
    {
        title: "Маврикий",
        description: "Отдых на волшебном острове в окружении восхитительной первобытной природы с комфортными условиями проживания напоминает пребывание в настоящем раю. ",
        tags: ["Без визы"],
        price: 215000,
        img: "./img/Маврикий.jpg",
    },
    {
        title: "Кипр",
        description: "Кипр – невероятной красоты остров в Средиземном море. Отдых на Кипре порадует жарким солнцем, лазурным морем, хорошими отелями, обилием развлечений для детей и взрослых и насыщенной экскурсионной программой. ",
        tags: ["Без визы"],
        price: 121000,
        img: "./img/Кипр.jpg",
    },
    {
        title: "Куба",
        description: "Остров Свободы, который неизменно ассоциируется с команданте Че Гевара, ромом и сигарами, до сих пор воспринимается русскими туристами как самое родное место за океаном. ",
        tags: ["Без визы"],
        price: 223000,
        img: "./img/Куба.jpg",
    },
    {
        title: "Израиль",
        description: "Израиль – это страна, которая привлекает каждый год миллионы туристов своими побережьями Средиземного и Красного моря и уникальными историческими экскурсиями. ",
        tags: ["Без визы"],
        price: 232000,
        img: "./img/Израиль.jpg",
    },
    {
        title: "Казахстан",
        description: "Туры в Казахстан интересны пляжным отдыхом по системе 'все включено' на Каспийском море, экологическим, историческим и горнолыжным туризмом.",
        tags: ["Без визы"],
        price: 75000,
        img: "./img/Казахстан.jpg",
    }
];

let currentState = [...tours];

const itemsContainer = document.querySelector("#shop-items");
const itemTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");

function renderItems(arr) {
    nothingFound.textContent = "";
    itemsContainer.innerHTML = "";
    arr.forEach((item) => {
        itemsContainer.append(prepareShopItem(item));
    })
    if (!arr.length) {
        nothingFound.textContent = "Ничего не найдено";
    }
}

function sortByAlphabet(a, b) {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
}

renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

function prepareShopItem(shopItem) {
    const { title, description, tags, img, price } = shopItem;
    const item = itemTemplate.content.cloneNode(true);

    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = description;
    item.querySelector("img").src = img;
    item.querySelector(".price").textContent = `от ${price}р.`;

    const tagsHolder = item.querySelector(".tags");
    tags.forEach((tag) => {
        const element = document.createElement("span");
        element.textContent = tag;
        element.classList.add("tag");
        tagsHolder.append(element);
    })
    return item;
}

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase();
    currentState = tours.filter((el) =>
        el.title.toLowerCase().includes(searchString)
    );
    currentState.sort((a, b) => sortByAlphabet(a, b));
    renderItems(currentState);
    sortControl.selectedIndex = 0;
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);

const sortControl = document.querySelector("#sort");
sortControl.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case "expensive":
            {
                currentState.sort((a, b) => b.price - a.price);
                break;
            }
        case "cheap":
            {
                currentState.sort((a, b) => a.price - b.price);
                break;
            }
        case "alphabet":
            {
                currentState.sort((a, b) => sortByAlphabet(a, b));
                break;
            }
    }
    renderItems(currentState);
})