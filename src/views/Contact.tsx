import { Component } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import { Object } from 'parse';
import { ChangeMessageFn, FetchPostFn } from '../store/action.interface';
import { Actions, Getters } from '../store/enums';
import BaseComponent from '../components/BaseComponent';
import Modal from '../components/controls/Modal';
import Accordion from '../components/controls/Accordion';

@Component({
  components: {
    Modal,
    Accordion
  },
  methods: {
    ...mapActions([
      Actions.changeMessage,
      Actions.fetchPost
    ])
  },
  computed: {
    ...mapGetters([
      Getters.message,
      Getters.posts
    ])
  }
})
export default class Contact extends BaseComponent {
  [Getters.message]!: string;
  [Getters.posts]!: Array<Object>;
  [Actions.changeMessage]!: ChangeMessageFn;
  [Actions.fetchPost]!: FetchPostFn;
  modal!: Modal;

  render() {
    return (
      <div>
        <div>{this.message} Contact Page</div>
        <button on-click={() => this.modal.show()}>open</button>
        <button on-click={async () => {
          this.showLoading();
          await this.fetchPost({
            page: 1,
            perPage: 10
          });
          this.hideLoading();
        }}>fetch post</button>
        <button on-click={async () => {
          this.showLoading();
          console.log('start:');
          await this.changeMessage(this.message + ' 1');
          console.log('changed');
          this.hideLoading();
        }}>change message</button>
        <Modal on-addRef={(modal: Modal) => { this.modal = modal }} settings={{ duration: 1000 }} {...{
          scopedSlots: {
            header: () => {
              return (
                <div>Header</div>
              );
            },
            content: () => {
              return (
                <div>
                  Content
                </div>
              );
            },
            actions: () => {
              return (
                <div>
                  <div class="ui primary button">Yes</div>
                  <div class="ui cancel button" on-click={() => this.modal.hide()}>No</div>
                </div>
              );
            }
          }
        }}></Modal>
        <div class="tw-pt-2">
          {
            this.posts.length ?
              <Accordion className='styled fluid'>
                {
                  this.posts.map(item => {
                    return [
                      <div class="title" id={'case-title-' + item.id}>
                        <i class="dropdown icon"></i>
                        <span>Post - {item.id}</span>
                      </div>,
                      <div class="content" id={'case-content-' + item.id}>
                        {item.get('message')}
                      </div>
                    ];
                  })
                }
              </Accordion>
              : null
          }
        </div>
      </div>
    );
  }
}
