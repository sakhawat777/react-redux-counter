import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './counterSlice';

export const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState(0);
	const addValue = Number(incrementAmount) || 0;
	const resetAll = () => {
		setIncrementAmount(0);
		dispatch(reset());
	};

	return (
		<div>
			<div>
				<button
					aria-label='Increment count'
					onClick={() => dispatch(increment())}>
					Increment
				</button>
				<p>{count}</p>
				<button
					aria-label='Decrement count'
					onClick={() => dispatch(decrement())}>
					Decrement
				</button>
				<br />
				<input
					type='text'
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<div>
					<button
						aria-label='Increment by amount'
						onClick={() => dispatch(incrementByAmount(addValue))}>
						Add Amount
					</button>
				</div>
				<br />
				<button aria-label='Reset count' onClick={resetAll}>
					Reset
				</button>
			</div>
		</div>
	);
};
