import { select, text, boolean } from '@storybook/addon-knobs/vue';
import { action } from '@storybook/addon-actions';
import PButton from './Button.vue';

export default {
    title: 'atoms/buttons',
    component: PButton,
    parameters: {
        info: {
            summary: '',
            components: { PButton },
        },
    },
};
const actions = {
    click: action('click'),
};
const data = {};

export const DefaultCase = () => ({
    components: { PButton },
    template: `
<p-button
        @click="click"
        :href="href" 
        :styleType="styleType" 
        :size="size"
        :disabled="disabled"
        :outline="outline"
        :link="link"
        :shpae="shape"
        >
       {{defaultSlot}} 
</p-button>`,
    data() {
        return {
            ...data,
        };
    },
    props: {
        styleType: {
            default: select('styleType', [
                '',
                'primary', 'primary-dark', 'primary1', 'primary2', 'primary3', 'primary4',
                'secondary', 'secondary1', 'secondary2',
                'other1', 'other2', 'other3', 'other4',
                'gray', 'gray1', 'gray2', 'gray3',
                'alert', 'safe', 'dark',
            ], ''),
        },
        size: {
            default: select('size', ['', 'sm', 'lg'], ''),
        },
        shape: {
            default: select('shape', ['', 'circle'], ''),
        },
        defaultSlot: {
            default: text('default slot', 'button', 'slot'),
        },
        href: {
            default: text('href', ''),
        },
        disabled: {
            default: boolean('disabled', false),
        },
        outline: {
            default: boolean('outline', false),
        },
        link: {
            default: boolean('link', false),
        },
    },
    methods: {
        ...actions,
    },
});


export const block = () => ({
    components: { PButton },
    template: `
<div style="width: 600px;height: 100px;border: #1a1f3e solid 1px;">
<p-button
        @click="click"
        :href="href" 
        :styleType="styleType" 
        :size="size" 
        :disabled="disabled"
        :outline="outline"
        :link="link"
        :block="block"
        :shpae="shape"
        >
       {{defaultSlot}} 
</p-button>
</div>`,
    data() {
        return {
            ...data,
        };
    },
    props: {
        styleType: {
            default: select('styleType', [
                '', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',
            ], 'primary'),
        },
        size: {
            default: select('size', ['', 'sm', 'lg'], ''),
        },
        shape: {
            default: select('shape', ['', 'circle'], ''),
        },
        defaultSlot: {
            default: text('default slot', 'button', 'slot'),
        },
        href: {
            default: text('href', ''),
        },
        disabled: {
            default: boolean('disabled', false),
        },
        outline: {
            default: boolean('outline', false),
        },
        link: {
            default: boolean('link', false),
        },
        block: {
            default: boolean('block', false),
        },
    },
    methods: {
        ...actions,
    },
});
