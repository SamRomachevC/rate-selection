const (
	First IsogramOrder = iota + 1
	Second
	Third
)

func hasDigit(text string) bool {
	re := regexp.MustCompile(`\d`)
	return re.MatchString(text)
}

	letters := make(map[string]int)
	for _, c := range text {
		l := string(c)
		if _, ok := letters[l]; ok {
			letters[l] += 1

			if letters[l] > 3 {
				return false, nil
			}
