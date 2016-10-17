import Ember from 'ember';

export function formatGithubUrl(params/*, hash*/) {
  var str = params[0];
  var res = str.replace("https://api.github.com/repos/", "https://github.com/").replace('/pulls/', '/pull/');
  return res;
}

export default Ember.Helper.helper(formatGithubUrl);
