import { loadingComponentElementId } from './misc';

const Loading = () => {
    return (
        <div id={loadingComponentElementId} className='loading hide'>
            <h1 className='loading-text'>Loading...</h1>
        </div>
    );
};

export { Loading };
