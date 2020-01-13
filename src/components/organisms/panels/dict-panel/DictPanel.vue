<template>
    <p-panel-top panel-title="Tags" class="dict-panel-title">
        <template #head>
            <div class="panel-header" :class="{'edit':editMode}">
                <p-button v-if="!editMode" style-type="primary" class="header-btn"
                          @click="clickEdit()"
                >
                    {{ buttonTag }}
                </p-button>
                <p-button v-if="editMode" style-type="secondary" :outline="true"
                          class="header-btn"
                          @click="clickCancel()"
                >
                    {{ tr('COMMON.BTN_CANCEL') }}
                </p-button>
                <p-button v-if="editMode" style-type="secondary" class="header-btn"
                          @click="clickConfirm()"
                >
                    {{ tr('COMMON.BTN_SAVE') }}
                </p-button>
            </div>
        </template>
        <template #body>
            <p-dict-input-group ref="tagInputGroup"
                                :dict.sync="proxyTags"
                                :edit-mode="editMode"
            />
            <div v-if="isEmpty(proxyTags) && !editMode" class="no-dict">
                No Tags
            </div>
        </template>
    </p-panel-top>
</template>

<script>
import { reactive, toRefs, computed } from '@vue/composition-api';
import { Util } from '@/lib/global-util';
import PPanelTop from '@/components/molecules/panel/panel-top/PanelTop';
import PDictInputGroup from '@/components/organisms/forms/dict-input-group/DictInputGroup';
import PButton from '@/components/atoms/buttons/Button';
import { makeProxy } from '@/lib/compostion-util';

export default {
    name: 'PDictPanel',
    components: {
        PPanelTop,
        PDictInputGroup,
        PButton,
    },
    events: ['confirm'],
    props: {
        dict: Object,
    },
    setup(props, context) {
        const state = reactive({
            buttonTag: computed(() => ((Util.methods.isEmpty(state.proxyTags)) ? Util.methods.tr('COMMON.BTN_ADD', null, context.parent) : Util.methods.tr('COMMON.BTN_EDIT', null, context.parent))),
            editMode: false,
            originTags: undefined,
            proxyTags: makeProxy('dict', props, context.emit),
            tagInputGroup: null, // template refs
        });

        const clickEdit = () => {
            state.editMode = true;
            state.originTags = {
                ...props.dict,
            };
        };
        const clickCancel = () => {
            state.editMode = false;
            state.proxyTags = {
                ...state.originTags,
            };
            state.tagInputGroup.reset();
        };
        const clickConfirm = () => {
            state.editMode = false;
            if (JSON.stringify(state.originTags) !== JSON.stringify(state.proxyTags)) {
                context.emit('confirm', state.proxyTags);
            }
            state.tagInputGroup.reset();
        };


        return {
            ...toRefs(state),
            clickEdit,
            clickCancel,
            clickConfirm,
            // if tag confirm fail, you can reset dict to before edit value
            reset: () => {
                state.proxyTags = state.originTags;
            },
        };
    },

};
</script>

<style lang="scss" scoped>
    .dict-panel-title{
        min-height: 100px;
    };
    .panel-header{
        display: inline-flex;
        width: 100%;

        &.edit{
            justify-content: flex-end;
        }
        .header-btn{
            margin-left: 1rem;
        }
    }
    .no-dict{
        text-align: center;
        font: 24px/32px Arial;
        letter-spacing: 0;
        color: #A5ACCE;
    }
</style>