function inheritProperty(parent, child) {
  parent.prototype = Object.create(child.prototype);
  parent.prototype.constructor = parent;
};

module.exports = inheritProperty;