import {facebook, instagram, shieldTick, support, truckFast, twitter} from "../assets/icons";
import {
    bigShoe1,
    bigShoe2,
    bigShoe3,
    customer1,
    customer2,
    shoe4,
    shoe5,
    shoe6,
    shoe7,
    thumbnailShoe1,
    thumbnailShoe2,
    thumbnailShoe3
} from "../assets/images";

export const navLinks = [
    {href: "#home", label: "Главная"},
    {href: "#about-us", label: "О нас"},
    {href: "#products", label: "Товары"},
    {href: "#contact-us", label: "Связаться с нами"},
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    {value: '1k+', label: 'Брендов'},
    {value: '500+', label: 'Магазинов'},
    {value: '250k+', label: 'Клиентов'},
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Бесплатная доставка",
        subtext: "Наслаждайтесь удобными покупками с нашей бесплатной службой доставки."
    },
    {
        imgURL: shieldTick,
        label: "Безопасный платеж",
        subtext: "Совершайте беспроблемные транзакции с помощью наших безопасных способов оплаты."
    },
    {
        imgURL: support,
        label: "С удовольствием поможем вам",
        subtext: "Наша преданная своему делу команда здесь, чтобы помогать вам на каждом шагу."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Владимир Ларин',
        rating: 4.5,
        feedback: "Внимание к деталям и качество продукта превзошли мои ожидания. Настоятельно рекомендую!"
    },
    {
        imgURL: customer2,
        customerName: 'Голубушкина Анна',
        rating: 4.5,
        feedback: "Продукт не только оправдал, но и превзошел мои ожидания. Я обязательно буду постоянным клиентом!"
    }
];


export const footerLinks = [
    {
        title: "Товары",
        links: [
            {name: "Air Force 1", link: "/"},
            {name: "Air Max 1", link: "/"},
            {name: "Air Jordan 1", link: "/"},
            {name: "Air Force 2", link: "/"},
            {name: "Nike Waffle Racer", link: "/"},
            {name: "Nike Cortez", link: "/"},
        ],
    },
    {
        title: "Помощь",
        links: [
            {name: "О нас", link: "/"},
            {name: "Часто задаваемые вопросы", link: "/"},
            {name: "Как это работает", link: "/"},
            {name: "Политика конфиденциальности", link: "/"},
            {name: "Политика оплаты", link: "/"},
        ],
    },
    {
        title: "Связаться с нами",
        links: [
            {name: "customer@nike.com", link: "mailto:customer@nike.com"},
            {name: "+7 916 666 66 66", link: "tel:+92554862354"},
        ],
    },
];

export const socialMedia = [
    {src: facebook, alt: "facebook logo"},
    {src: twitter, alt: "twitter logo"},
    {src: instagram, alt: "instagram logo"},
];