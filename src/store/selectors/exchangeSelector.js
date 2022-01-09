import { createSelector } from 'reselect';
import memoizeOne from 'memoize-one';
import _filter from 'lodash/filter';
import _toLower from 'lodash/toLower';
import _sortBy from 'lodash/sortBy';
import _values from 'lodash/values';
import _pick from 'lodash/pick';

export const exchangeReducer = (state) => state.exchanges;

export const getCryptoExchanges = createSelector(exchangeReducer, (exchanges) =>
  memoizeOne((name = '', sortBy = 'trust_score_rank') =>
    _sortBy(
      _filter(exchanges, (exchange) =>
        _toLower(exchange.name).includes(_toLower(name))
      ),
      (item) => parseFloat(item[sortBy])
    )
  )
);

export const getExchanges = createSelector(exchangeReducer, (exchanges) =>
  memoizeOne((id = []) => _values(_pick(exchanges, id)))
);
