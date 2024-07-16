import { loadingComponentElementId } from '../../components';
import { TCustomizedWindow } from './misc';

(window as TCustomizedWindow).$$ = {
    loadingAnimation: (status = true) => {
        document.getElementById(loadingComponentElementId)?.classList.toggle('hide', !status);
    },
};
