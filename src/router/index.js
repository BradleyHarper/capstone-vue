import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Instructions from '@/components/Instructions';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
    'routes': [
        {
            'path': '/home',
            'name': 'Home',
            'component': Home
        },
        {
            'path': '/contact',
            'name': 'Contact',
            'component': Contact
        },
        {
            'path': '/instructions',
            'name': 'Instructions',
            'component': Instructions
        }
    ]
});
