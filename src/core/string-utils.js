import reduce from 'lodash/reduce';
import camelize from 'underscore.string/camelize';
import underscored from 'underscore.string/underscored';

export const camelizedObject = obj => {
    return reduce(
        obj,
        (memo, val, key) => {
            memo[camelize(key)] = val;
            return memo;
        },
        {}
    );
};

export const underscoredObject = obj => {
    return reduce(
        obj,
        (memo, val, key) => {
            memo[underscored(key)] = val;
            return memo;
        },
        {}
    );
};
