import { Loading } from './components/Loading';

const App = () => {
    return (
        <div className='app'>
            <h1>Hello world</h1>

            <button
                onClick={() => {
                    $$.loadingAnimation(true);
                }}
            >
                show loading
            </button>
            <Loading />
        </div>
    );
};

export default App;
