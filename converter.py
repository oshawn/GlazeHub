def kiloToPounds(kilos):
	pounds = kilos*2.20462
	return pounds



def leftOverPoundsToOunces(pounds):
	if pounds >= 1:
		lbs = int(pounds)
		ounces = pounds % lbs
		oz = int(round(ounces * 16))
	else:
		oz = int(round(pounds * 16))
		print "This is oz", oz

	return oz




def leftOverKilosToGrams(kilos):
	if kilos >= 1:
		kgs = int(kilos)
		gms = kilos % kgs
		grams = int(gms * 1000)

		return grams
	else:
		grams = kilos *1000
		return grams

def mult(percentage, batch_size):
	result = percentage * batch_size
	return result

def checkPercent(percentlist):
	checknums = percentlist
	sum_of_nums = sum(checknums)
	if sum_of_nums != 100:
		print "This is sum_of_nums", sum_of_nums
		return False
	else:
		print "This is sum_of_nums True", sum_of_nums
		return True

def getPercentMult(percentlist):
	origPercent = percentlist
	sum_of_nums = sum(origPercent)
	newPercent = 100/sum_of_nums
	return newPercent



def main():
	pass




if __name__ == "__main__":

	main()