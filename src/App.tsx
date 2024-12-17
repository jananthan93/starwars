import Footer from './layout/Footer';
import Header from './layout/Header';
import ContentLayout from './layout/ContentLayout';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ContentLayout />
        <Footer />
      </div>
    </>
  );
}

export default App;
