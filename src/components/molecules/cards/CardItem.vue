<template>
    <p-pane-layout class="p-card-item-container" v-on="$listeners">
        <p-row class="p-card-item">
            <p-col :flex-grow="0">
                <slot name="side">
                    <img :src="icon" class="icon">
                </slot>
            </p-col>
            <p-col class="p-card-body">
                <p-row wrap="wrap">
                    <p-col :col="12">
                        <slot name="body">
                            <header class="title">
                                <slot name="title">
                                    {{ title }}
                                </slot>
                            </header>
                            <span class="contents">
                                {{ contents }}
                            </span>
                        </slot>
                    </p-col>
                    <p-col :col="12">
                        <slot name="extra" />
                    </p-col>
                </p-row>
            </p-col>
        </p-row>
    </p-pane-layout>
</template>

<script>
import config from '@/lib/config';
import PPaneLayout from '@/components/molecules/layouts/pane-layout/PaneLayout.vue';
import PCol from '@/components/atoms/grid/col/Col.vue';
import PRow from '@/components/atoms/grid/row/Row.vue';

export default {
    name: 'CardItem',
    components: {
        PRow, PCol, PPaneLayout,
    },
    props: {
        icon: {
            type: String,
            default: config.get('COLLECTOR_IMG'),
        },
        title: {
            type: String,
            default: '',
        },
        contents: {
            type: String,
            default: '',
        },
    },
    setup() {
        return {};
    },
};
</script>

<style lang="postcss" scoped>
.p-card-item-container {
    &:hover {
        box-shadow: 0px 0px 8px rgba(theme('colors.primary'), .22);
    }
}
.p-card-item {
    padding: 1rem;
    height: 126px;
    .icon {
        width: 4.5rem;
        height: 4.5rem;
    }
    .p-card-body {
        all: unset;
        width: 100%;
        padding-left: 1.5rem;
        >div {
            height: 100%;
        }
        .title {
            font-size: 1rem;
            font-weight: bold;
            line-height: 1.125rem;
            padding-bottom: .5rem;
        }
        .contents {
            font-size: .875rem;
        }
    }
}
</style>
