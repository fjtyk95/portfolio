import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">あなたの名前</h1>
        <p className="text-xl text-gray-600">Web Developer & Designer</p>
        <div className="mt-8">
          <a href="#contact" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 