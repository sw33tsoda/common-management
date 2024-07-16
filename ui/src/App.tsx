import { Loading } from './components/Loading';

const App = () => {
    return (
        <div className='app'>
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
