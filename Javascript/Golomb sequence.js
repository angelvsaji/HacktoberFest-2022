//Rajesh Mishra
// javascript Program to find first
// n terms of Golomb sequence.

<script>


	function findGolomb(n)
	{

		// base case
		if (n == 1)
			return 1;

		// Recursive Step
		return 1 + findGolomb(n - findGolomb(findGolomb(n - 1)));
	}

	// Print the first n term of
	// Golomb Sequence
	function printGolomb(n)
	{

		// Finding first n terms of
		// Golomb Sequence.
		for (let i = 1; i <= n; i++)
			document.write(findGolomb(i) + " ");
	}

	// Driver Code
	var n = 9;
	printGolomb(n);

// This code is contributed by Amit Katiyar
</script>
