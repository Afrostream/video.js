/**
 * @file audio-track-list.js
 */
import TrackList from '../track-list';
import * as Fn from '../../utils/fn.js';
/**
 * A audio track list as defined in:
 * https://html.spec.whatwg.org/multipage/embedded-content.html#audiotracklist
 *
 * interface AudioTrackList : EventTarget {
 *   readonly attribute unsigned long length;
 *   getter AudioTrack (unsigned long index);
 *   AudioTrack? getTrackById(DOMString id);
 *
 *   attribute EventHandler onchange;
 *   attribute EventHandler onaddtrack;
 *   attribute EventHandler onremovetrack;
 * };
 *
 * @param {AudioTrack[]} tracks A list of tracks to initialize the list with
 * @extends EventTarget
 * @class AudioTrackList
 */

class AudioTrackList extends TrackList {
  constructor() {
    super();
  }
}

export default AudioTrackList;
