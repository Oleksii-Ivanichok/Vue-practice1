<template>
    <div>
        <h1>Page with posts</h1>
        <my-input v-model:value="searchQuery" placeholder="Search">

        </my-input>
        <div class="app__buttons">
            <my-button @click="showDialog">Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions">
            </my-select>
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list
            v-if="!isPostsLoading"
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
        />
        <div v-else>Loading</div>
        <div ref="observer" class="observer">

        </div>
        <!--        <div class="page__wrapper">-->
        <!--            <div v-for="pageNumber in totalPages" :key="pageNumber" class="page"-->
        <!--                 :class="{'current-page':page === pageNumber}" @click="changePage(pageNumber)"></div>-->
        <!--        </div>-->

    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
    components: {
        MyInput,
        MySelect,
        MyButton,
        MyDialog,
        PostForm,
        PostList
    },
    data() {
        return {
            posts: [],
            searchQuery: '',
            dialogVisible: false,
            isPostsLoading: false,
            page: 1,
            limit: 10,
            totalPages: 0,
            selectedSort: '',
            sortOptions: [
                {value: 'title', name: 'By name'},
                {value: 'body', name: 'By description'}
            ]
        }
    },
    methods: {
        // changePage(pageNumber) {
        //     this.page = pageNumber
        // },
        showDialog() {
            this.dialogVisible = true;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        createPost(post) {
            this.dialogVisible = false;
            this.posts.push(post);
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                })
                this.totalPages = Math.ceil(response.headers['x-total-count'])
                // console.log(this.totalPages)
                // console.log(response)
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                console.log(e)
            } finally {
                this.isPostsLoading = false;
            }
        },
        async loadMorePosts() {
            try {
                this.page++;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                })
                // this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                // console.log(this.totalPages)
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                console.log(e)
            } finally {
            }
        }
    },
    mounted() {
        this.fetchPosts();
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && this.posts.length < this.totalPages) {
                this.loadMorePosts()
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
        // page() {
        //     this.fetchPosts()
        // }
    }
}
</script>

<style>

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
}

.current-page {
    border: 2px solid teal;
}

.observer {
    height: 30px;
    background: greenyellow;
}
</style>