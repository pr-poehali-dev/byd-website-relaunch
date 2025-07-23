import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    model: '',
    bodyColor: '',
    interiorColor: '',
    name: '',
    phone: '',
    email: ''
  });

  const models = [
    {
      name: 'BYD Seagull',
      range: '305 км',
      type: 'Электромобиль',
      acceleration: '9.4 сек',
      price: 'от 1 890 000 ₽',
      image: '/img/ef7c4044-53c1-408f-a005-ae4b7409c064.jpg'
    },
    {
      name: 'BYD Dolphin',
      range: '420 км',
      type: 'Электромобиль', 
      acceleration: '7.9 сек',
      price: 'от 2 290 000 ₽',
      image: '/img/ef7c4044-53c1-408f-a005-ae4b7409c064.jpg'
    },
    {
      name: 'BYD Seal',
      range: '570 км',
      type: 'Электромобиль',
      acceleration: '5.9 сек', 
      price: 'от 3 490 000 ₽',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop'
    },
    {
      name: 'BYD Song Plus',
      range: '505 км',
      type: 'Электромобиль',
      acceleration: '8.5 сек',
      price: 'от 2 990 000 ₽',
      image: '/img/3dc04782-8a0a-4d50-8b20-16922c0c4628.jpg'
    }
  ];

  const steps = [
    { icon: 'Search', title: 'Выберите модель', description: 'На сайте или у дилера' },
    { icon: 'FileText', title: 'Оформите заявку', description: 'Через сайт или дилера' },
    { icon: 'CheckCircle', title: 'Подтверждение', description: 'Согласование деталей, оплата' },
    { icon: 'Truck', title: 'Доставка', description: 'Получение вашего BYD' }
  ];

  const technologies = [
    {
      icon: 'Battery',
      title: 'Blade Battery',
      description: 'Клиноподобная батарея обеспечивает максимальную безопасность и долговечность'
    },
    {
      icon: 'Zap',
      title: 'e-Platform 3.0',
      description: 'Высокая эффективность и увеличенный запас хода благодаря новой платформе'
    },
    {
      icon: 'Smartphone',
      title: 'Дизайн и Комфорт',
      description: 'Просторный салон и современный интерфейс для максимального комфорта'
    },
    {
      icon: 'Shield',
      title: 'Гарантия',
      description: 'Длительная гарантия на батарею и автомобиль для спокойствия владельцев'
    }
  ];

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-lime-600">Automobi</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#models" className="text-gray-700 hover:text-byd-blue transition-colors">Модели</a>
              <a href="#tech" className="text-gray-700 hover:text-byd-blue transition-colors">Технологии</a>
              <a href="#steps" className="text-gray-700 hover:text-byd-blue transition-colors">Как купить</a>
              <a href="#contacts" className="text-gray-700 hover:text-byd-blue transition-colors">Контакты</a>
            </nav>
            <Button className="bg-byd-blue hover:bg-blue-700">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                BYD: Будущее
                <span className="text-byd-blue"> Электромобильности</span>
                <br />в России
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Безопасность Blade Battery. Доступность. Технологии.
                <br />
                Создайте свою мечту с BYD.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-byd-blue hover:bg-blue-700">
                  <Icon name="Car" className="mr-2" />
                  Выбрать модель
                </Button>
                <Button size="lg" variant="outline" className="border-byd-blue text-byd-blue hover:bg-byd-blue hover:text-white">
                  <Icon name="Calendar" className="mr-2" />
                  Записаться на тест-драйв
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/ee2866ef-0858-4442-a1bd-7c93d095f976.jpg" 
                alt="BYD Seal"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Модели BYD</h2>
            <p className="text-xl text-gray-600">Выберите автомобиль, который подходит именно вам</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {models.map((model, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{model.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Icon name="Battery" size={16} className="mr-2 text-byd-blue" />
                      Запас хода: {model.range}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Zap" size={16} className="mr-2 text-byd-blue" />
                      {model.type}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Gauge" size={16} className="mr-2 text-byd-blue" />
                      0-100 км/ч: {model.acceleration}
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-byd-blue mb-4">{model.price}</div>
                  <Button className="w-full" variant="outline">
                    Узнать цену
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Технологии BYD</h2>
            <p className="text-xl text-gray-600">Инновации, которые меняют мир автомобилей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name={tech.icon as any} size={32} className="text-byd-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как стать владельцем BYD</h2>
            <p className="text-xl text-gray-600">Простой путь к автомобилю вашей мечты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-byd-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white">
                  <Icon name={step.icon as any} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Form Section */}
      <section id="quiz" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Подберите свой BYD</h2>
            <p className="text-xl text-gray-600">Заполните форму и получите персональное предложение</p>
          </div>
          
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Шаг {currentStep} из 4</span>
                  <span className="text-sm text-gray-500">{Math.round((currentStep / 4) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-byd-blue h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="animate-fade-in">
                    <Label htmlFor="model" className="text-base font-medium mb-4 block">Выберите модель BYD:</Label>
                    <Select value={formData.model} onValueChange={(value) => setFormData({...formData, model: value})}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Выберите модель" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seagull">BYD Seagull</SelectItem>
                        <SelectItem value="dolphin">BYD Dolphin</SelectItem>
                        <SelectItem value="seal">BYD Seal</SelectItem>
                        <SelectItem value="song-plus">BYD Song Plus</SelectItem>
                        <SelectItem value="undecided">Еще не определился</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="animate-fade-in">
                    <Label htmlFor="bodyColor" className="text-base font-medium mb-4 block">Выберите цвет кузова:</Label>
                    <Select value={formData.bodyColor} onValueChange={(value) => setFormData({...formData, bodyColor: value})}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Выберите цвет кузова" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="white">Белый</SelectItem>
                        <SelectItem value="black">Черный</SelectItem>
                        <SelectItem value="gray">Серый</SelectItem>
                        <SelectItem value="blue">Синий</SelectItem>
                        <SelectItem value="red">Красный</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="animate-fade-in">
                    <Label htmlFor="interiorColor" className="text-base font-medium mb-4 block">Выберите цвет салона:</Label>
                    <Select value={formData.interiorColor} onValueChange={(value) => setFormData({...formData, interiorColor: value})}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Выберите цвет салона" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="black">Черный</SelectItem>
                        <SelectItem value="beige">Бежевый</SelectItem>
                        <SelectItem value="gray">Серый</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="animate-fade-in space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium mb-2 block">Ваше имя:</Label>
                      <Input 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium mb-2 block">Телефон *:</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-medium mb-2 block">Email:</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.ru"
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      <Icon name="ChevronLeft" className="mr-1" size={16} />
                      Назад
                    </Button>
                  )}
                  {currentStep < 4 ? (
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="ml-auto bg-byd-blue hover:bg-blue-700"
                      disabled={
                        (currentStep === 1 && !formData.model) ||
                        (currentStep === 2 && !formData.bodyColor) ||
                        (currentStep === 3 && !formData.interiorColor)
                      }
                    >
                      Далее
                      <Icon name="ChevronRight" className="ml-1" size={16} />
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="ml-auto bg-byd-blue hover:bg-blue-700"
                      disabled={!formData.phone}
                    >
                      <Icon name="Send" className="mr-2" size={16} />
                      Отправить заявку
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с официальным дилером BYD в России</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" className="text-byd-blue mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="text-byd-blue mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@byd-russia.ru</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="text-byd-blue mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Автомобильная, д. 1</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <a href="#" className="text-byd-blue hover:text-blue-700">
                    <Icon name="MessageCircle" size={24} />
                  </a>
                  <a href="#" className="text-byd-blue hover:text-blue-700">
                    <Icon name="Send" size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Интерактивная карта</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-2xl font-bold text-byd-blue">BYD</span>
              <p className="mt-2 text-gray-400">Build Your Dreams</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400">+7 (495) 123-45-67</p>
              <p className="text-gray-400">info@byd-russia.ru</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <a href="#" className="text-gray-400 hover:text-white block">Политика конфиденциальности</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© BYD Россия, 2025. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}