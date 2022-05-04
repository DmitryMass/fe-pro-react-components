import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

//  Во многих случаях, можно вынести в отдельный компонент
// описания, лого и тк далее, я в работе вынес Лого футера и
// хедера в отдельный компонент (подразумивая что он будет менятся в будущем)

const Application = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Application;
