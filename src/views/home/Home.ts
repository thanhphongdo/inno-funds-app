import { Component } from 'vue-property-decorator';
import BaseComponent from '@/components/BaseComponent';
import Modal from '@/components/controls/Modal';
import { mapActions, mapGetters } from 'vuex';
import { Getters, Actions } from '@/store/enums';
import { FetchPostFn } from '@/store/action.interface';
import { Post } from '@/store/root_state.interface';
@Component({
  components: {
    Modal,
  },
  computed: {
    ...mapGetters([Getters.posts]),
  },
  methods: {
    ...mapActions([Actions.fetchPost]),
  },
})
export default class App extends BaseComponent {
  modal!: Modal;
  [Getters.posts]!: Array<Post>;
  [Actions.fetchPost]!: FetchPostFn;
  mounted() {
    this.fetchPost({
      page: 1,
      perPage: 10,
    });
  }
}