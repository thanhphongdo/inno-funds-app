<template>
<div>
    <h1 class="mt-5">Home Page</h1>
    <div>
        <div v-for="post in posts" :key="post.id">
            {{post.message}}
        </div>
    </div>
    <Modal v-on:addRef="($event) => ref($event, 'modal')" className="fade" modalDialogClassName="modal-dialog-centered">
        <template v-slot:header>
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </template>
        <template v-slot:body>
            <p>Modal body text goes here.</p>
        </template>
        <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </template>
    </Modal>
    <button type="button" class="btn btn-primary" @click="modal.show()">
        open modal
    </button>
</div>
</template>

<script lang="ts">
import {
    Component
} from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import Modal from "@/components/controls/Modal";
import {
    mapState,
    mapActions,
    mapGetters
} from 'vuex';
import {
    Getters,
    Actions
} from '@/store/enums';
import {
    FetchPostFn
} from '@/store/action.interface';
import {
    Post
} from '@/store/root_state.interface';
@Component({
    components: {
        Modal,
    },
    computed: {
        ...mapGetters([Getters.posts])
    },
    methods: {
        ...mapActions([Actions.fetchPost])
    }
})
export default class App extends BaseComponent {
    modal!: Modal;
    [Getters.posts] !: Array < Post > ;
    fetchPost !: FetchPostFn;
    mounted() {
        this.fetchPost({
            page: 1,
            perPage: 10
        });
    }
}
</script>

<style lang="scss">
</style>
