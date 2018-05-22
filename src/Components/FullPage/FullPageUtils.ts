// import { HorizontalSlider } from './HorizontalSlide';

// export interface IOSInfo {
//   name: string;
//   rule: RegExp;
// }

// export class FullPageUtils {
//   public static operatingSystems: IOSInfo[] = [
//     { name: 'iOs', rule: /iP(hone|od|ad)/ },
//     { name: 'Android OS', rule: /Android/ },
//     { name: 'BlackBerry OS', rule: /BlackBerry|BB10/ },
//     { name: 'Windows Mobile', rule: /IEMobile/ },
//     { name: 'Amazon OS', rule: /Kindle/ },
//     { name: 'Windows 3.11', rule: /Win16/ },
//     { name: 'Windows 95', rule: /(Windows 95)|(Win95)|(Windows_95)/ },
//     { name: 'Windows 98', rule: /(Windows 98)|(Win98)/ },
//     { name: 'Windows 2000', rule: /(Windows NT 5.0)|(Windows 2000)/ },
//     { name: 'Windows XP', rule: /(Windows NT 5.1)|(Windows XP)/ },
//     { name: 'Windows Server 2003', rule: /(Windows NT 5.2)/ },
//     { name: 'Windows Vista', rule: /(Windows NT 6.0)/ },
//     { name: 'Windows 7', rule: /(Windows NT 6.1)/ },
//     { name: 'Windows 8', rule: /(Windows NT 6.2)/ },
//     { name: 'Windows 8.1', rule: /(Windows NT 6.3)/ },
//     { name: 'Windows 10', rule: /(Windows NT 10.0)/ },
//     { name: 'Windows ME', rule: /Windows ME/ },
//     { name: 'Open BSD', rule: /OpenBSD/ },
//     { name: 'Sun OS', rule: /SunOS/ },
//     { name: 'Linux', rule: /(Linux)|(X11)/ },
//     { name: 'Mac OS', rule: /(Mac_PowerPC)|(Macintosh)/ },
//     { name: 'QNX', rule: /QNX/ },
//     { name: 'BeOS', rule: /BeOS/ },
//     { name: 'OS/2', rule: /OS\/2/ },
//     {
//       name: 'Search Bot',
//       rule: /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/
//     }
//   ];

//   static detectOS(userAgentString: string) {
//     return FullPageUtils.operatingSystems.find(os => (userAgentString.match(os.rule) ? true : false));
//   }

//   static getNodes(doc: Document, sel: string) {
//     return doc.querySelectorAll(`[${sel}]`);
//   }

//   static hideAllButActive(activeSlide: number, nodes: NodeListOf<Element>) {
//     Array.from(nodes).forEach((n, i) => {
//       (n as HTMLElement).style.display = i === activeSlide ? 'inline-block' : 'none';
//     });
//   }
// }

// // export const enum KEY_IDX {
// //   37: 'LEFT',

// // }
