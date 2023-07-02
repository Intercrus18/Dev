const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

//Массив с результатами
const results = 
[
	new Result("Вам многому нужно научиться", 0),
	new Result("Вы уже неплохо разбираетесь", 2),
	new Result("Ваш уровень выше среднего", 4),
	new Result("Вы в совершенстве знаете тему", 6)
];

//Массив с вопросами
const questions = 
[
	new Question("Кто является основным ответственным за определение уровня классификации информации?", 
	[
		new Answer("Руководитель среднего звена", 0),
		new Answer("Высшее руководство", 0),
		new Answer("Владелец", 1),
		new Answer("Пользователь", 0)
	]),

	new Question("Какая категория является наиболее рискованной для компании с точки зрения вероятного мошенничества и нарушения безопасности?", 
	[
		new Answer("Хакеры", 0),
		new Answer("Атакующие", 0),
		new Answer("Сотрудники", 1),
		new Answer("Контрагенты (лица, работающие по договору)", 0)
	]),

	new Question("Если различным группам пользователей с различным уровнем доступа требуется доступ к одной и той же информации, какое из указанных ниже действий следует предпринять руководству?", 
	[
		new Answer("Снизить уровень безопасности этой информации для обеспечения ее доступности и удобства использования", 0),
		new Answer("Улучшить контроль за безопасностью этой информации", 1),
		new Answer("Требовать подписания специального разрешения каждый раз, когда человеку требуется доступ к этой информации", 0),
		new Answer(" Снизить уровень классификации этой информации", 0)
	]),

	new Question("Что самое главное должно продумать руководство при классификации данных?", 
	[
		new Answer("Необходимый уровень доступности, целостности и конфиденциальности", 1),
		new Answer("Типы сотрудников, контрагентов и клиентов, которые будут иметь доступ к данным", 0),
		new Answer("Оценить уровень риска и отменить контрмеры", 0),
		new Answer("Управление доступом, которое должно защищать данные", 0)
	]),

	new Question("Кто в конечном счете несет ответственность за гарантии того, что данные классифицированы и защищены?", 
	[
		new Answer("Владельцы данных", 0),
		new Answer("Руководство", 1),
		new Answer("Пользователи", 0),
		new Answer("Администраторы", 0)
	]),

	new Question("Когда целесообразно не предпринимать никаких действий в отношении выявленных рисков?", 
	[
		new Answer("Никогда. Для обеспечения хорошей безопасности нужно учитывать и снижать все риски", 0),
		new Answer("Когда риски не могут быть приняты во внимание по политическим соображениям", 0),
		new Answer("Когда стоимость контрмер превышает ценность актива и потенциальные потери", 1),
		new Answer("Когда необходимые защитные меры слишком сложны", 0)
	])
];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
	}
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}