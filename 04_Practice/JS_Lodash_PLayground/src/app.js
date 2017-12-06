// import "./scss/styles.scss";
// import "bootstrap";

import _ from 'lodash';

let doLodash = () => {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let arr1 = [0, 1, false, 2, '', 3];
    let arr2 = ['a', 'f', 'b'];
    let arr3 = [2.1, 1.2];
    let arr4 = [2.3, 3.4];
    let arradd1 = [2, 3];
    let arradd2 = [[4]];
    let arr5 = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    let arr6 = [{'x': 1, 'y': 2}];
    let arr7 = [
        {'user': 'barney', 'active': false},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': true}
    ];
    let arr8 = [1, [2, [3, [4]], 5]];
    let arr9 = [['a', 1], ['b', 2]];
    let arr10 = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];
    let arr11 = [1, 1, 2, 3];
    let arr12 = ['a', 'b', 'c', 'a', 'b', 'c'];
    let arr13 = [1, 2, 3, 4, 5];


    // doChunk();
    // doCompact();
    // doConcat();
    // doDrop();
    // doDropRight();
    // doDropWhile();
    // doInitial();
    // doPull();
    // doPullAll();
    // doPullAllWith();
    // doPullAt();
    // doRemove();


    // doDifferent();
    // doDifferentBy();
    // doDifferentWith();
    // doIntersection();
    doIntersectionBy();
    // doIntersectionWith(arr5,arr10);


    // doReverse(arr11);

    // doFill(arr);
    // doFindIndex(arr7);
    // doFindLastIndex(arr7);
    // doIndexOf(arr);
    // doLastIndexOf(arr);
    // doSortedIndex(arr11);

    // doFlatten(arr8);
    // doFlattenDeep(arr8);
    // doFlattenDepth(arr8);

    // doFromPair(arr9);

    // doJoin(arr);
};
//Helper
let logTitle = (title) => {
    console.log('***** ', title, ' *****');
};
let logBefore = (...arr) => {
    console.log('Before', arr);
};
let logAfter = (...arr) => {
    console.log('After', arr);
};

//Array
let doChunk = () => {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    logTitle('CHUNK - RESULT NEW ARRAY');
    logBefore(arr);
    logAfter(_.chunk(arr, 3));
};
let doCompact = () => {
    //false, null, 0, "", undefined, and NaN
    let arr = [0, 1, false, 2, '', 3];
    logTitle('COMPACT - RESULT NEW ARRAY');
    logBefore(arr);
    logAfter(_.compact(arr));
};
let doConcat = () => {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let arradd1 = [2, 3];
    let arradd2 = [[4]];
    logTitle('CONCAT - RESULT NEW ARRAY');
    logBefore(arr, arradd1, arradd2);
    logAfter(_.concat(arr, arradd1, arradd2));
};
let doDrop = () => {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    logTitle('DROP - RETURN NEW ARRAY');
    logBefore(arr);
    logAfter(_.drop(arr, 3));
};
let doDropRight = () => {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    logTitle('DROP RIGHT - RETURN NEW ARRAY');
    logBefore(arr);
    logAfter(_.dropRight(arr, 2));
};
let doDropWhile = () => {
    let arr = [
        {'user': 'barney', 'active': false},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': true}
    ];
    logTitle('DROP WHILE - RETURN NEW ARRAY');
    logBefore(arr);
    logAfter(_.dropWhile(arr, (item) => !item.active));
};
let doInitial = () => {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    logTitle('INITIAL - RETURN NEW ARRAY');
    logBefore(arr);
    logAfter(_.initial(arr));

    logTitle('USING DROP');
    logAfter(_.dropRight(arr, 1));
};
//--
let doPull = () => {
    let arr = [1, 1, 2, 3];
    logTitle('PULL - MUTATE ARRAY');
    logBefore([1, 1, 2, 3]);
    logAfter(_.pull(arr, 1));
};
let doPullAll = () => {
    let arr = ['a', 'b', 'c', 'a', 'b', 'c'];
    logTitle('PULL ALL - MUTATE ARRAY');
    logBefore(['a', 'b', 'c', 'a', 'b', 'c']);
    logAfter(_.pullAll(arr, ['a', 'c']));
};
let doPullAllWith = () => {
    let arr = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    logTitle('PULL ALL WITH - MUTATE ARRAY');
    logBefore([{'x': 1, 'y': 2}, {'x': 2, 'y': 1}]);
    logAfter(_.pullAllWith(arr, [{'x': 1, 'y': 2}], _.isEqual));
};
let doPullAt = () => {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    logTitle('PULL AT - MUTATE ARRAY');
    logBefore(['a', 'b', 'c', 'd', 'e']);
    logAfter(_.pullAt(arr, [1, 3]));
};
let doRemove = () => {
    let arr = [1, 2, 3, 4, 5];
    logTitle('REMOVE - MUTATE ARRAY');
    logBefore(arr);
    logAfter(_.remove(arr, (item) => item % 2 == 0));
};

let doDifferent = () => {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let arrdiff = ['a', 'f', 'b'];
    logTitle('DIFFERENT - RETURN NEW ARRAY');
    logBefore(arr, arrdiff);
    logAfter(_.difference(arr, arrdiff));
};
let doDifferentBy = () => {
    let arr = [2.1, 1.2];
    let arrdiff = [2.3, 3.4];
    logTitle('DIFFERENT BY - RETURN NEW ARRAY');
    logBefore(arr, arrdiff);
    logAfter(_.differenceBy(arr, arrdiff, Math.floor));
};
let doDifferentWith = () => {
    let arr = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    let arrdiff = [{'x': 1, 'y': 2}];
    logTitle('DIFFERENT WITH - RETURN NEW ARRAY');
    logBefore(arr, arrdiff);
    logAfter(_.differenceWith(arr, arrdiff, _.isEqual));
};
let doIntersection = () => {
    let arr1 = ['a', 'b', 'c', 'd', 'e'];
    let arr2 = ['a', 'f', 'b'];
    logTitle('INTERSECTION - RETURN NEW ARRAY');
    logBefore(arr1, arr2);
    logAfter(_.intersection(arr1, arr2));
};
let doIntersectionBy = () => {
    let arr1 = [2.1, 1.2];
    let arr2 = [2.3, 3.4];
    logTitle('INTERSECTION BY - RETURN NEW ARRAY');
    logBefore(arr1, arr2);
    logAfter(_.intersectionBy(arr1, arr2, Math.floor));
};
let doIntersectionWith = (arr1, arr2) => {
    logTitle('INTERSECTION WITH - RETURN NEW ARRAY');
    logBefore(arr1, arr2);
    logAfter(_.intersectionWith(arr1, arr2, _.isEqual));
};

let doFindIndex = (arr) => {
    logTitle('FIND INDEX');
    logBefore(arr);
    logAfter(_.findIndex(arr, (item) => item.user == 'fred'));
};
let doFindLastIndex = (arr) => {
    logTitle('FIND LAST INDEX');
    logBefore(arr);
    logAfter(_.findLastIndex(arr, (item) => item.user == 'fred'));
};
let doIndexOf = (arr) => {
    logTitle('INDEX OF');
    logBefore(arr);
    logAfter(_.indexOf(arr, 'd', 0));
};
let doLastIndexOf = (arr) => {
    logTitle('LAST INDEX OF');
    logBefore(arr);
    logAfter(_.lastIndexOf(arr, 'b'));
};
let doSortedIndex = (arr) => {
    logTitle('SORTED INDEX');
    logBefore(arr);
    logAfter(arr, 2)
};


let doFlatten = (arr) => {
    logTitle('FLATTEN');
    logBefore(arr);
    logAfter(_.flatten(arr));
};
let doFlattenDeep = (arr) => {
    logTitle('FLATTEN DEEP');
    logBefore(arr);
    logAfter(_.flattenDeep(arr));
};
let doFlattenDepth = (arr) => {
    logTitle('FLATTEN DEPTH');
    logBefore(arr);
    logAfter(_.flattenDepth(arr, 2));
};
let doFromPair = (arr) => {
    logTitle('FROM PAIR');
    logBefore(arr);
    logAfter(_.fromPairs(arr));
};
let doJoin = (arr) => {
    logTitle('JOIN');
    logBefore(arr);
    logAfter(_.join(arr, '-'));
};
let doReverse = (arr) => {
    logTitle('REVERSE');
    logBefore(arr);
    logAfter(_.reverse(arr));
};
let doFill = (arr) => {
    logTitle('FILL');
    logBefore(arr);
    logAfter(_.fill(arr, 'x', 1, 3));
};

doLodash();