namespace dragonBones {
    /**
     * The properties of the object carry basic information about an event,
     * which are passed as parameter or parameter's parameter to event listeners when an event occurs.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * 事件对象，包含有关事件的基本信息，当发生事件时，该实例将作为参数或参数的参数传递给事件侦听器。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    export class EventObject extends BaseObject {
        /**
         * Animation start play.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 动画开始播放。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public static readonly START: string = "start";
        /**
         * Animation loop play complete once.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 动画循环播放完成一次。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public static readonly LOOP_COMPLETE: string = "loopComplete";
        /**
         * Animation play complete.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 动画播放完成。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public static readonly COMPLETE: string = "complete";
        /**
         * Animation fade in start.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 动画淡入开始。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public static readonly FADE_IN: string = "fadeIn";
        /**
         * Animation fade in complete.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 动画淡入完成。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public static readonly FADE_IN_COMPLETE: string = "fadeInComplete";
        /**
         * Animation fade out start.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 动画淡出开始。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public static readonly FADE_OUT: string = "fadeOut";
        /**
         * Animation fade out complete.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 动画淡出完成。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public static readonly FADE_OUT_COMPLETE: string = "fadeOutComplete";
        /**
         * Animation frame event.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 动画帧事件。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public static readonly FRAME_EVENT: string = "frameEvent";
        /**
         * Animation frame sound event.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 动画帧声音事件。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public static readonly SOUND_EVENT: string = "soundEvent";

        public static toString(): string {
            return "[class dragonBones.EventObject]";
        }
        /**
         * If is a frame event, the value is used to describe the time that the event was in the animation timeline. (In seconds)
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 如果是帧事件，此值用来描述该事件在动画时间轴中所处的时间。（以秒为单位）
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public time: number;
        /**
         * The event type。
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 事件类型。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public type: EventStringType;
        /**
         * The event name. (The frame event name or the frame sound name)
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 事件名称。 (帧事件的名称或帧声音的名称)
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public name: string;
        /**
         * The armature that dispatch the event.
         * @see dragonBones.Armature
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 发出该事件的骨架。
         * @see dragonBones.Armature
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public armature: Armature;
        /**
         * The bone that dispatch the event.
         * @see dragonBones.Bone
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 发出该事件的骨骼。
         * @see dragonBones.Bone
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public bone: Bone | null;
        /**
         * The slot that dispatch the event.
         * @see dragonBones.Slot
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 发出该事件的插槽。
         * @see dragonBones.Slot
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public slot: Slot | null;
        /**
         * The animation state that dispatch the event.
         * @see dragonBones.AnimationState
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 发出该事件的动画状态。
         * @see dragonBones.AnimationState
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public animationState: AnimationState;
        /**
         * The custom data.
         * @see dragonBones.CustomData
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * 自定义数据。
         * @see dragonBones.CustomData
         * @version DragonBones 5.0
         * @language zh_CN
         */
        public data: UserData | null;
        /**
         * @private
         */
        protected _onClear(): void {
            this.time = 0.0;
            this.type = "";
            this.name = "";
            this.armature = null as any;
            this.bone = null;
            this.slot = null;
            this.animationState = null as any;
            this.data = null;
        }
    }
}