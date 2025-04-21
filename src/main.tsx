import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './index.css'
import './lib/i18n' // Import i18n configuration

import router from "./router/router.tsx";
import { LanguageProvider } from './lib/LanguageContext.tsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <LanguageProvider>
            <RouterProvider router={router}/>
        </LanguageProvider>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
)
