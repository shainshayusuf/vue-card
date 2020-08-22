import Vuex from 'vuex'

const createStore = () =>{
    return new Vuex.Store({
        state:{
         tasks:[]
        },
        mutations:{
           setPosts(state,task){
               state.tasks=task
           }
        },
        actions:{
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios.$get('https://jsonplaceholder.typicode.com/todos/').then(
                    data => {
                        const postArray = []
                        for (const key in data) {
                            postArray.push({ ...data[key], id: key })
                        }
                        vuexContext.commit('setPosts', postArray)
                    }
                ).catch(e => context.error(e))

        
            },
           

        },
        getters:{
            loadedTasks(state) {
                return state.tasks
            },
        }
    })
}

export default createStore