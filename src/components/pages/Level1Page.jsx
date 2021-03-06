import React from "react";
import styled from "styled-components";

const Container = styled.main`
  padding: 0;
  width: 100%;
  max-width: 760px;
  height: 100%;
  background-color: white;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 25px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 26px;
  margin-top: 15px;
  margin-bottom: 25px;
  border-bottom: 1px solid black;
`;

const List = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
`;

const MarkedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: disc;
  margin-left: 35px;

  >li {
    margin-bottom: 15px;
  }
`;

const ListItem = styled.li`
  display: block;
  margin-bottom: 40px;
  line-height: 20px;
`;

const Bold = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Regular = styled.p`
  padding: 0;
  margin: 0;
  padding-left: 25px;
`;

const data = [
  [
    "Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения",
    [
      ["пользователя", "Дает отзывчивый интерфейс, кроссбраузерность, адаптивность и доступность"],
      ["менеджера проекта", "Выполненная в срок и согласно ТЗ"],
      ["дизайнера", "Соответствующая макету"],
      ["верстальщика", "Семантичная, аккуратно написанная"],
      ["клиентского и серверного программиста", "Верстка, которая без проблем интегрируется в проект"]
    ]
  ],
  [
    "Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.",
    "Со стороны разработчика чем больше проект тем больше потребность в едином код-стайле и подробной документации, т.к. должен сохранятся низкий порог вхождения для новых разработчиков. Методологии: любые принятые в компании, например БЭМ для именования классов или атомарный дизайн для структуры проекта."
  ],

  [
    "Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.",
    "Для мобильных устройств могут создаваться отдельные версии сайтов, либо адаптироваться текущие. Во втором случае следует избегать крупных картинок на весь экран и сложных анимаций, приоритет должен сместиться в сторону функциональности. При этом используется резиновая верстка, т.е элементы сайта адаптируется под любой размер экрана и нет нужды создавать отдельные версии для каждого устройства. Также следует учитывать особенности браузеров, например мне в работе нужна поддержка старых версий firefox."
  ],

  [
    "Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.",
    "Для написания: встроенный в IDE автокомплитер, emmet. Для проверки:  Prettier, ESLint. Для отладки: Инструменты разработчика Google Chrome."
  ],
  [
    "Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?",
    "Ошибку можно попробовать найти через редактор стилей в инструментах разработчика."
  ],
  [
    "Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?",
    "Спрошу у дизайнера как сделать правильно. Это самый дешевый по времени вариант - лучше чем например придумать самому, а потом переделывать из за того что сайт не соответствует ТЗ."
  ],
  [
    "Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS- верстка или и то, и другое? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?",
    "Читаю на медиуме ДевШахту, Александра Майорова, слушаю подкасты Андрея Мелихова, Веб-стандарты. JS и верстка интересны в равной степени. В свободное время читаю книги или смотрю кино, в отпуске стараюсь ездить путешествовать."
  ],
  [
    "Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.",
    "Работаю в крупной Казанской компании над медицинским веб-приложением последние 10 месяцев. Формально я фронтенд-разработчик, но по факту часто пишу на SQL/PLSQL, не углубляясь в БД логику. В остальное время пишу на собственном фреймворке компании на базе JS. Пишу гайды на корпоративном сайте. Последний месяц обучаю двух стажеров. Сейчас хочу работать с более актуальными и популярными инструментами. Все работы есть на gitHub."
  ]
];

const Level1Page = () => (
  <Container>
    <Title>Level 1</Title>
    <List>
      {data.map((it, i) => (
        <ListItem key={i}>
          {typeof it[1] === "string" ? (
            <div>
              <Bold>{`${i + 1}. ${it[0]}`}</Bold>
              <Regular>{it[1]}</Regular>
            </div>
          ) : (
            <div>
              <Bold>{`${i + 1}. ${it[0]}`}</Bold>
              <MarkedList>
                {it[1].map((item, j) => (
                  <li key={j}>
                    <Bold>{item[0]}</Bold>
                    <Regular>{item[1]}</Regular>
                  </li>
                ))}
              </MarkedList>
            </div>
          )}
        </ListItem>
      ))}
    </List>
  </Container>
);

export default Level1Page;
