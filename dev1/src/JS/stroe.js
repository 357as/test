import Vue from "vue"
import Vuex from "vuex"
import adduser from '../JS/adduser'
Vue.use(Vuex)

import persistedState from 'vuex-persistedstate'
const stroe = new Vuex.Store({
    //数据源 相当于data
    state: {
        userdata: adduser,
        //管理员信息
        administrators: {
            image: ` <svg t="1680669386858" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2778" width="130" height="130">
            <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#424A60" p-id="2779"></path>
            <path
              d="M934.523586 801.121103C922.924138 688.286897 827.603862 600.275862 711.697655 600.275862h-104.977655A24.09931 24.09931 0 0 1 582.62069 576.176552v-11.387586c0-10.292966 6.69131-19.102897 16.331034-22.722207 102.470621-38.523586 172.632276-206.636138 158.384552-325.437793C743.883034 104.500966 652.711724 14.141793 540.495448 1.588966a251.851034 251.851034 0 0 0-27.100689-1.553656l-0.847449-0.017655C375.790345-0.282483 264.827586 110.486069 264.827586 247.172414c0 106.354759 67.213241 260.502069 161.456552 295.353379 9.233655 3.407448 15.095172 12.588138 15.095172 22.439724v11.211035c0 13.312-10.78731 24.09931-24.09931 24.09931h-104.977655c-115.906207 0-211.226483 88.011034-222.825931 200.845241C181.72469 935.688828 336.525241 1024 512 1024s330.27531-88.311172 422.523586-222.878897z"
              fill="#FBCE9D" p-id="2780"></path>
            <path
              d="M591.307034 116.70069c65.588966 18.025931 127.346759 58.368 166.894345 111.616-0.282483-3.901793-0.406069-7.891862-0.865103-11.70538C743.883034 104.500966 652.711724 14.141793 540.495448 1.588966a251.851034 251.851034 0 0 0-27.100689-1.553656l-0.847449-0.017655c-122.173793-0.264828-223.514483 88.187586-243.78262 204.499862h0.088276c3.160276 4.449103 6.249931 8.951172 9.622068 13.24138 1.235862-1.536 2.489379-3.054345 3.760552-4.555035 35.310345-42.01931 94.296276-51.74731 144.472276-29.501793a123.586207 123.586207 0 0 0 164.599172-67.001379z"
              fill="#6C797A" p-id="2781"></path>
            <path
              d="M934.523586 801.121103C922.924138 688.286897 827.586207 600.275862 711.697655 600.275862H688.551724l-105.931034 105.931035h-141.24138l-52.965517-35.310345-60.539586-70.62069h-15.571862c-115.888552 0-211.226483 88.011034-222.825931 200.845241C181.72469 935.688828 336.525241 1024 512 1024s330.27531-88.311172 422.523586-222.878897z"
              fill="#E7ECED" p-id="2782"></path>
            <path
              d="M759.172414 960.300138c12.093793-6.69131 23.834483-13.929931 35.310345-21.53931V829.793103h-35.310345v130.507035zM264.827586 960.300138V829.793103h-35.310345v108.967725c11.475862 7.609379 23.216552 14.848 35.310345 21.53931z"
              fill="#CCD5D6" p-id="2783"></path>
            <path d="M459.034483 670.896552h105.931034v105.931034h-105.931034z" fill="#38454F" p-id="2784"></path>
            <path
              d="M440.690759 1018.950621c23.304828 3.248552 47.104 5.049379 71.309241 5.049379 24.399448 0 48.357517-1.818483 71.838897-5.12L547.310345 776.827586h-70.62069l-35.998896 242.123035z"
              fill="#546A79" p-id="2785"></path>
            <path
              d="M459.034483 685.02069L388.413793 600.275862h-85.733517a1.730207 1.730207 0 0 0-1.606621 2.365793L370.758621 776.827586l88.275862-58.844689V685.02069zM721.319724 600.275862H635.586207l-70.62069 84.744828v32.962207L653.241379 776.827586l69.667311-174.185931a1.712552 1.712552 0 0 0-1.588966-2.365793z"
              fill="#FFFFFF" p-id="2786"></path>
          </svg>
          `,
            name: 'admin',
            password: 123456,
            jurisdiction: '管理员',
            lastLoginTime: '12:00',
            lastLoginLocation: '眉山',
        },
        userinfo: {
        },
        homedata: {}
    },
    //相当于计算属性computed
    getters: {

    },
    //直接修改state里面的数据源
    mutations: {
        push_userdata(state, val) {
            Vue.set(state, 'userdata', val)
        },
        push_userdata_singe(state, val) {
            Vue.set(state.userdata, state.userdata.length, val)
        },
        push_homedata(state, val) {
            Vue.set(state, 'homedata', val)
        },
        delete_user(state, val) {
            for (let i = 0; i < state.userdata.length; i++) {
                if (state.userdata[i].id == val) {
                    state.userdata.splice(i, 1)
                }
            }
        },
        edit_user(state, val) {
            for (let i = 0; i < state.userdata.length; i++) {
                if (state.userdata[i].id == val.id) {
                    Vue.set(state.userdata, i, val)
                }
            }
        },
        change_lastLoginTime(state, val) {
            Vue.set(state.administrators, 'lastLoginTime', val)
        },
        push_userinfo(state, val) {
            Vue.set(state, 'userinfo', val)
        },
        change_islogin(state, val) {
            Vue.set(state.userinfo, 'islogin', val)
        }

    },
    //一般用于异步修改数据 (axios,定时器，延时器，事件)
    actions: {
        actions_push_userdata_singe(content, val) {
            content.commit('push_userdata_singe', val)
        },
        actions_delete_user(content, val) {
            content.commit('delete_user', val)
        },
        actions_edit_user(content, val) {
            content.commit('edit_user', val)

        }
    },
    //模块化vuex
    modules: {
    },
    plugins: [persistedState()]
})

export default stroe