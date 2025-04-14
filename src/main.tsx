import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";

import './index.css'
import './lib/i18n' // Import i18n configuration

import router from "./router/router.tsx";
import { LanguageProvider } from './lib/LanguageContext.tsx';

createRoot(document.getElementById('root')!).render(
    <LanguageProvider>
        <RouterProvider router={router}/>
    </LanguageProvider>
)
