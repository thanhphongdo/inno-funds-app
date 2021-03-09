import { Component } from 'vue-property-decorator';
import BaseComponent from '../components/BaseComponent';

@Component
export default class Home extends BaseComponent {
  render() {
    return (
      <div>
        <div>This is Home</div>
        <router-link
          to="/contact"
        >
          Contact
        </router-link>
      </div>
    );
  }
}
