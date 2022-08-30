import { createRouter, createWebHistory } from "vue-router";
import LoginItem from "@/views/auth/LoginItem";
import Login from "@/views/auth/Login";
import Shikoyat from "@/views/auth/Shikoyat";
import Protokol from "@/views/auth/Protokol";
import Main from "@/views/MainPage/Main";
import Commission from '@/views/MainPage/Commission'
import Complaints from '@/views/MainPage/Complaints'
import SendApplication from '@/views/MainPage/SendApplication'
import Accepted from '@/views/MainPage/Accepted'
import Denied from '@/views/MainPage/Denied'
import Decision from '@/views/MainPage/Decision'
import Message from '@/views/MainPage/Message'
import SingleComplaints from '@/views/MainPage/SingleComplaints'
import SingleSendApplication from '@/views/MainPage/SingleSendApplication'
import Accept_Protocol from '@/views/MainPage/Accept_Protokol'
const routes = [
  {
    path: "/auth",
    name: "auth",
    component: LoginItem,
    children: [
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/shikoyat",
        name: "shikoyat",
        component: Shikoyat,
      },
      {
        path: "/protokol",
        name: "protokol",
        component: Protokol,
      },
    ],
  },
  {
    path: "/",
    name: "main",
    component: Main,
    children:[
      {
        path: "/commission",
        name:"commission",
        component:Commission
      },
      {
        path: "/complaints",
        name:"complaints",
        component:Complaints,
      },
      {
        path : "/single_complaints/:id",
        name:"singleComplaints",
        meta: {
          child: 'complaints-child'
        },
        component:SingleComplaints
      },
      {
        path: "/sendApplication",
        name:"sendApplication",
        component:SendApplication
      },
      {
        path : "/send_application/:id",
        name:"send_application",
        meta: {
          child: 'send_app_child'
        },
        component:SingleSendApplication
      },
      {
        path: "/accepted",
        name:"accepted",
        component:Accepted
      },
      {
        path : "/accept_protocol/:id",
        name:"accept_protocol",
        meta: {
          child: 'accept_protocol_child'
        },
        component:Accept_Protocol
      },
      {
        path: "/denied",
        name:"denied",
        component:Denied
      },
      {
        path: "/decision",
        name:"decision",
        component:Decision
      },
      {
        path: "/message",
        name:"message",
        component:Message
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const name = to.name === "login";
  const shikoyat = to.name === "shikoyat";
  const protokol = to.name === "protokol";
  if (!token && !name && !shikoyat && !protokol) {
    return next({ name: "login" });
  } else {
    if (token && name) {
      return next({ name: "commission" });
    } else {
      next();
    }
  }
});
export default router;
