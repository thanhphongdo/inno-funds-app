import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
  message?: string;

  render() {
    this.message = 'hihi';
    return (
      <div>Contact</div>
    );
  }
}
