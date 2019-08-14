import { Type } from '@angular/core';
import { KVObject } from '../../utils/public_api';

export interface PopoverOptions<T=any> {
  scrim?: boolean,
  event?: MouseEvent,

  /**
   * 立即呈现
   */
  present?: boolean,

  component: Type<T>,
  componentAttrs?: KVObject,

  /**
   * 点击空白处销毁
   */
  fragile?: boolean;


  /**
   * 点击空白处隐藏
   */
  recluse?: boolean;

  [key: string]: any;
}
