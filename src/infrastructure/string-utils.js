import * as _ from 'lodash';
import * as s from 'underscore.string';

export const camelizedObject = (obj) => {
    return _.reduce(obj, (memo, val, key) => {
        memo[s.camelize(key)] = val;
        return memo;
    }, {});
};

export const underscoredObject = (obj) => {
    return _.reduce(obj, (memo, val, key) => {
        memo[s.underscored(key)] = val;
        return memo;
    }, {});
};
