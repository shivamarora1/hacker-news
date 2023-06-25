export default function extractDomain(url: string):string {
    let domain;
    if (url.indexOf('//') > -1) {
      domain = url.split('/')[2];
    } else {
      domain = url.split('/')[0];
    }
  
    domain = domain.split(':')[0];
    domain = domain.split('?')[0];
    domain = domain.replace(/www./g, '');
  
    return domain;
  }