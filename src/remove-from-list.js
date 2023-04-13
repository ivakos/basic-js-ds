









const { ListNode } = require('../extensions/list-node.js');


function removeKFromList(list, value) {
  if (!list) return null;

  if (list.value === value) {
    return removeKFromList(list.next, value);
  }
  else{
    list.next = removeKFromList(list.next, value)
  }

  return list;
}

module.exports = {
  removeKFromList
};
