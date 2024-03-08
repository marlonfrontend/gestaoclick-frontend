import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { getPosts, getPostById } from '@/services/post'
import { getUserById } from '@/services/user'
import type { Post } from '@/types'

export interface State {
  posts: Post[]
  post?: Post
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    posts: [],
    post: undefined
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setPost(state, post) {
      state.post = post
    },
    clearPost(state) {
      state.post = undefined
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const posts = await getPosts()
        commit('setPosts', posts)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchPost({ commit }, id) {
      try {
        const post = await getPostById(id)
        try {
          const user = await getUserById(id)
          post.user = user
        } catch (error) {
          console.log(error)
        }
        commit('setPost', post)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
